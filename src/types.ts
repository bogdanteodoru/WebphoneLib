import { ITransportDelegate } from './transport';
import { RegistererRegisterOptions } from "sip.js/lib/api/registerer-register-options";

export interface IClientOptions {
  account: {
    user: string;
    password: string;
    uri: string;
    name: string;
  };
  transport: {
    wsServers: string;
    iceServers: string[];
    delegate?: ITransportDelegate;
  };
  media: IMedia;
  userAgentString?: string;
  registererOptions?: RegistererRegisterOptions;
  settings: any;
}

export type MediaDeviceId = string | undefined;

export interface IMediaDevice {
  // undefined means let the browser pick the default.
  id: MediaDeviceId;

  volume: number;
  muted: boolean;
}

export interface IMediaInput extends IMediaDevice {
  audioProcessing: boolean;
}

export type IMediaOutput = IMediaDevice;

export interface IMedia {
  input: IMediaInput;
  output: IMediaOutput;
}

export interface IRemoteIdentity {
  phoneNumber: string;
  displayName: string;
}

export interface IRetry {
  interval: number;
  limit: number;
  timeout: number;
}
