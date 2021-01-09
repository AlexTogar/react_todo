import * as React from 'react';

export default function Loading({ theme }: { theme: string }) {
  return (
    <div className='loading'>
      <span className='loading__message'>Загрузка...</span>
    </div>
  );
}
