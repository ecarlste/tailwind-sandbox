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
