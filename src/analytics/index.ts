import { AnalyticsBrowser } from '@segment/analytics-next'

const SEGMENT_WRITE_KEY = 'AxmMlFE7EFIobCdh1eFxP3ja2bRRelMi';

const analytics = AnalyticsBrowser.load({ writeKey: SEGMENT_WRITE_KEY })

export {
  SEGMENT_WRITE_KEY,
  analytics
};