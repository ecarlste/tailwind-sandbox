import React from 'react';

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
    <>
      <style global jsx>{`
        body {
          background-image: url('/images/clipboard/bg-header-desktop.png');
          background-repeat: no-repeat;
          background-size: contain;
        }

        @media (max-width: 576px) {
          body {
            background-image: url('/images/clipboard/bg-header-mobile.png');
          }
        }
      `}</style>

      <HeroSection />
      <SnippetSection />
      <FeaturesSection />
      <AccessAnywhereSection />
      <SuperchargeSection />
      <ReferencesSection />
      <CallToActionSection />
      <Footer />
    </>
  );
}

export default ClipboardSitePage;
