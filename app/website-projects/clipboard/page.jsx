import React from 'react';

import styles from './styles.module.css';

import HeroSection from '../../../components/clipboard/HeroSection';
import SnippetSection from '../../../components/clipboard/SnippetSection';
import FeaturesSection from '../../../components/clipboard/FeaturesSection';
import AccessAnywhereSection from '../../../components/clipboard/AccessAnywhereSection';
import SuperchargeSection from '../../../components/clipboard/SuperchargeSection';
import ReferencesSection from '../../../components/clipboard/ReferencesSection';
import CallToActionSection from '../../../components/clipboard/CallToActionSection';
import Footer from '../../../components/clipboard/Footer';

/**
 * Renders the main page of the Clipboard website.
 *
 * This component organizes and displays the primary sections of the site, including the hero, snippet, features, access details, supercharge, references, call-to-action, and footer.
 *
 * @returns {JSX.Element} The complete Clipboard site page.
 */
function ClipboardSitePage() {
  return (
    <main className={styles.clipboard}>
      <HeroSection />
      <SnippetSection />
      <FeaturesSection />
      <AccessAnywhereSection />
      <SuperchargeSection />
      <ReferencesSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}

export default ClipboardSitePage;
