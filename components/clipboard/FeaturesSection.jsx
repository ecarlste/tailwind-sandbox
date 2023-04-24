import React from 'react';

import styles from './FeaturesSection.module.css';

function FeaturesSection() {
  return (
    <section id="features">
      <div className={styles['section-container'] + ' my-20 md:my-40'}>
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          {/* <!-- Image --> */}
          <div className="md:w-3/5 md:my-auto">
            <img
              src="/images/clipboard/image-computer.png"
              alt=""
              className="md:object-contain"
            />
          </div>

          {/* <!-- Item Container  --> */}
          <div className="flex flex-col items-center mt-16 mb-24 space-y-12 text-xl md:w-2/5 md:my-auto md:text-left md:pl-16">
            {/* <!-- Item 1 --> */}
            <div>
              <h5 className={styles['header-md']}>Quick Search</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            {/* <!-- Item 2 --> */}
            <div>
              <h5 className={styles['header-md']}>iCloud Sync</h5>
              <p className="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>

            {/* <!-- Item 1 --> */}
            <div>
              <h5 className={styles['header-md']}>Complete History</h5>
              <p className="max-w-md text-grayishBlue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
