import React, {useEffect, useState} from 'react';
import {Alert, Platform, PermissionsAndroid} from 'react-native';
import {
  Container,
  InfoText,
  MessageText,
  StyledCamera,
} from './QRScannerScreenStyle';

export default function QRScannerScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.QR_CODE, BarcodeFormat.ALL_FORMATS],
    {checkInverted: true},
  );

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const cameraStatus = await Camera.requestCameraPermission();
    setHasPermission(cameraStatus === 'authorized');

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    }
  };

  useEffect(() => {
    if (barcodes.length > 0) {
      barcodes.forEach(barcode => {
        if (barcode.rawValue) {
          Alert.alert('Scanned Code', barcode.rawValue);
          console.log('Scanned:', barcode.rawValue);
        }
      });
    }
  }, [barcodes]);

  if (!device || !hasPermission) {
    return (
      <Container>
        <MessageText>Waiting for camera permission...</MessageText>
      </Container>
    );
  }

  return (
    <Container>
      {/* <StyledCamera
        device={device}
        isActive={true}
        frameProcessor={frameProcessor}
        frameProcessorFps={5}
      />
      <InfoText>Scan any QR or Barcode</InfoText> */}
    </Container>
  );
}
