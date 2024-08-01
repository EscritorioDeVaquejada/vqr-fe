import React, { FC } from 'react';
import { ErrorMessagesProps } from './types';

import styles from './index.module.scss';

const ErrorMessages: FC<ErrorMessagesProps> = ({ messages }) => {
  return (
    <div className={styles.errorList}>
      {messages.map((message, index) => (
        <li key={index} className={styles.message}>
          {message}
        </li>
      ))}
    </div>
  );
};

export default ErrorMessages;
