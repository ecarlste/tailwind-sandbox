#!/usr/bin/env node

import { readFile } from "fs/promises";
import { resolve } from "path";
import fetch from "node-fetch";

async function readToolVersions() {
  const toolVersionsPath = resolve(".tool-versions");
  const toolVersionsContent = await readFile(toolVersionsPath, "utf8");
  const lines = toolVersionsContent.split("\n");

  const nodeVersionSet = lines
    .find((line) => line.startsWith("nodejs"))
    ?.split(" ")[1];
  const pnpmVersionSet = lines
    .find((line) => line.startsWith("pnpm"))
    ?.split(" ")[1];

  console.log("Node.js version set:", nodeVersionSet);
  console.log("pnpm version set:", pnpmVersionSet);

  return {
    nodeVersionSet,
    pnpmVersionSet,
  };
}

async function fetchLatestLTSVersion() {
  const url = "https://nodejs.org/dist/index.json";
  const res = await fetch(url);
  const versions = await res.json();

  const ltsVersionNumbers = versions
    .filter((v) => v.lts)
    .map((v) => v.version.replace("v", ""));

  return ltsVersionNumbers[0];
}

async function readPackageJson() {
  const packageJsonPath = resolve("package.json");
  const packageJsonContent = await readFile(packageJsonPath, "utf8");
  return JSON.parse(packageJsonContent).engines?.pnpm || "";
}

async function validateVersions() {
  try {
    const [{ nodeVersionSet, pnpmVersionSet }, latestLTS, pnpmVersionPkg] =
      await Promise.all([
        readToolVersions(),
        fetchLatestLTSVersion(),
        readPackageJson(),
      ]);

    const errors = [];

    if (nodeVersionSet !== latestLTS) {
      errors.push(
        `.tool-versions specifies Node.js ${nodeVersionSet}, but the latest LTS is ${latestLTS}.`
      );
    }
    if (pnpmVersionSet !== pnpmVersionPkg) {
      errors.push(
        `.tool-versions specifies pnpm ${pnpmVersionSet}, but package.json engines specifies ${pnpmVersionPkg}.`
      );
    }

    if (errors.length > 0) {
      console.error("Error(s) found:");
      errors.forEach((error) => console.error(`- ${error}`));
      process.exit(1);
    }
    console.log("Node.js and pnpm versions match the expected versions.");
  } catch (err) {
    console.error("Failed to validate versions:", err);
    process.exit(1);
  }
}

validateVersions();
