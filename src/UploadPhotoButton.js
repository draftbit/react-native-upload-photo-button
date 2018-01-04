import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, StyleSheet, Image, Text } from 'react-native'
import Touchable from 'react-native-platform-touchable'

const UploadPhotoButton = ({
  onPress,
  label,
  color,
  circleBackgroundColor
}) => (
  <Touchable
    background={Touchable.Ripple('#eee', true)}
    style={styles.button}
    onPress={onPress}
  >
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: circleBackgroundColor }]}>
        <Image
          style={[styles.icon, { tintColor: color }]}
          source={require('./assets/camera.png')}
        />
      </View>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </View>
  </Touchable>
)

UploadPhotoButton.defaultProps = {
  label: 'Edit Photo',
  circleBackgroundColor: 'rgb(237, 250, 249)'
}

const ROUND_BUTTON_STYLES = {
  width: 60,
  height: 60,
  borderRadius: 30
}

const styles = StyleSheet.create({
  container: {
    width: 60
  },
  circle: {
    ...ROUND_BUTTON_STYLES,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    backgroundColor: 'transparent',
    fontSize: 12,
    textAlign: 'center',
    color: 'rgb(0, 175, 115)'
  }
})

export default UploadPhotoButton
