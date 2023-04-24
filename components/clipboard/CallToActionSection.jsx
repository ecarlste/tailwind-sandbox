import React from 'react';

import styles from './CallToActionSection.module.css';

function CallToActionSection() {
  return (
    <section id="bottom">
      <div className={styles['section-container'] + ' my-20'}>
        <h3 className={styles['header-lg']}>Clipboard for iOS and MacOS</h3>
        <p className={styles['section-content'] + ' mb-10'}>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
        </p>

        {/* <!-- Button Container --> */}
        <div className={styles['button-container']}>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
          >
            Download for iOS
          </a>

          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
