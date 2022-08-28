import React, {useState} from 'react'
import {Text, Switch, View} from 'react-native'
import * as S from './styles'


export function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <S.Container>
    <S.Title>Notifications</S.Title>
    <S.ContainerSwitch>
      <S.TextContent>Daily notification</S.TextContent>
    <Switch
        trackColor={{ false: "#767577", true: "#2196F3" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#2196F3"}
        ios_backgroundColor="#3e3e3e"
        /* onValueChange={toggleSwitch} */
        value={isEnabled}
      />
    </S.ContainerSwitch>
    <S.ContainerSwitch>
      <S.TextContent>Time</S.TextContent>
      <S.TextContent>09:00</S.TextContent>
    </S.ContainerSwitch>
 
    </S.Container>

  )
}
