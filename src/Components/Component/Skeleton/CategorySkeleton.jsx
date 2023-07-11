import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
  <div className='CategorySkeleton'>
      <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={150} height={150} />
      <Skeleton variant="text" sx={{ fontSize: '10px' }} />
    </Stack> <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={150} height={150} />
      <Skeleton variant="text" sx={{ fontSize: '10px' }} />
    </Stack>
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={150} height={150} />
      <Skeleton variant="text" sx={{ fontSize: '10px' }} />
    </Stack>
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular"width={150} height={150}/>
      <Skeleton variant="text" sx={{ fontSize: '10px' }} />
    </Stack>

  </div>
  );
}