declare module 'react-native-datalogic-scanner'{
export function testScan(success: boolean): Promise<string>;
export function scanOnce(): Promise<string>;
export function startScanning(): Promise<string>;
export function stopScanning(): void;
}



