import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EmployeeModel } from '../model/EmployeeModel'

const EmployeeCard = (props: { employee: EmployeeModel }) => {
  return (
    <View>
      <View style={[styles.card, { backgroundColor: props.employee.backgroundColor }]}>
        <Text style={styles.text}>{props.employee.name}</Text>
        <View style={{ height: 8 }}></View>
        <Text style={styles.text}>Email: {props.employee.email}</Text>
        <Text style={styles.text}>Phone No: {props.employee.phone}</Text>
        <View style={{ height: 8 }}></View>
        <Text style={styles.text}>Address: {props.employee.address}</Text>
      </View>
    </View>
  )
}

export default EmployeeCard

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'cyan',
    elevation: 10
  },
  text: {
    color: 'darkgrey',
    fontSize: 16,
    fontWeight: '500'
  }
})