import React from 'react';

import styles from './AccessAnywhereSection.module.css';

function AccessAnywhereSection() {
  return (
    <section id="access">
      <div className={styles['section-container'] + ' my-20'}>
        <h3 className={styles['header-lg']}>Access Clipboard Anywhere</h3>
        <p className={styles['section-content'] + ' mb-24'}>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>

        <img
          src="/images/clipboard/image-devices.png"
          alt=""
          className="mx-auto"
        />
      </div>
    </section>
  );
}

export default AccessAnywhereSection;
