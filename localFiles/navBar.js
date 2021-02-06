import FilePickerManager from 'react-native-file-picker';
FilePickerManager.showFilePicker(null, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled file picker');
  } else if (response.error) {
    console.log('FilePickerManager Error: ', response.error);
  } else {
    this.setState({
      file: response
    });
  }
});