import { AnalyticsBrowser } from '@segment/analytics-next'

export const SEGMENT_WRITE_KEY = 'AxmMlFE7EFIobCdh1eFxP3ja2bRRelMi';

export const analytics = AnalyticsBrowser.load({ writeKey: SEGMENT_WRITE_KEY })

export const trackStartOnboarding = (source: string) => {
  analytics.track('Start Onboarding', { source })
}