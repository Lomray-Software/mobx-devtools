export interface IEvent<TObj extends object = Record<any, any>, TValue = unknown> {
  type: string;
  observableKind: string;
  debugObjectName: string;
  object: TObj;
  name: string;
  newValue: TValue;
  spyReportStart: boolean;
}
