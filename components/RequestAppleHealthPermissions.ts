import AppleHealthKit, { HealthKitPermissions } from 'react-native-health';

const P = AppleHealthKit.Constants.Permissions;

const permissions: HealthKitPermissions = {
  permissions: {
    read: [
      P.StepCount,
      P.DistanceWalkingRunning,
      P.DistanceCycling,
      P.FlightsClimbed,
      P.HeartRate,
      P.RestingHeartRate,
      P.WalkingHeartRateAverage,
      P.HeartRateVariability,
      P.Vo2Max,
      P.ActiveEnergyBurned,
      P.BasalEnergyBurned,
      P.SleepAnalysis,
      P.MindfulSession,
      P.BodyMass,
      P.Height,
      P.BodyMassIndex,
      P.BodyFatPercentage,
      P.LeanBodyMass,
      P.BodyTemperature,
      P.RespiratoryRate,
      P.OxygenSaturation,
      P.BloodPressureSystolic,
      P.BloodPressureDiastolic,
    ],
    write: [
      /* P.Workout */
      // nur drin lassen, wenn wirklich benötigt
    ],
  },
};

export default function RequestAppleHealthPermissions(): Promise<void> {
  return new Promise((resolve, reject) => {
    AppleHealthKit.initHealthKit(permissions, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}
