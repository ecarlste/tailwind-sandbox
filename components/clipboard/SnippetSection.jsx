import React from 'react';

import styles from './SnippetSection.module.css';

function SnippetSection() {
  return (
    <section id="snippets">
      <div className={styles['section-container'] + ' my-20'}>
        <h3 className={styles['header-lg']}>Keep track of your snippets</h3>
        <p className={styles['section-content'] + ' mb-24'}>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
    </section>
  );
}

export default SnippetSection;
