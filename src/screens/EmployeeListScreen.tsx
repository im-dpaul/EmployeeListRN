import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import EmployeeCard from '../components/EmployeeCard';

const EmployeeListScreen = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const [loading, setLoading] = useState<boolean>(true)
    const [employeeList, setEmployeeList] = useState<any[]>([]);

    const getEmployeeData = async () => {
        try {
            const response = await fetch('https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d');

            if (response.status == 200) {
                const json = await response.json();
                setEmployeeList(json);
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    };

    useEffect(() => {
        getEmployeeData();
    }, []
    );

    return (
        <SafeAreaView style={styles.main}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={'cyan'}
            />
            <View style={styles.appBar}>
                <Text style={styles.title}>Employees</Text>
                <View style={{ height: 8 }}></View>
            </View>
            <View style={styles.main}>
                <ScrollView>
                    <View style={{ margin: 16 }}>
                        {
                            loading
                                ? <View style={styles.loading}>
                                    <ActivityIndicator color={'cyan'} size={48} />
                                </View>
                                : (employeeList.length > 0)
                                    ? <FlatList
                                        data={employeeList}
                                        keyExtractor={(item) => item.id.toString()}
                                        scrollEnabled={false}
                                        renderItem={({ item }) => (
                                            <EmployeeCard employee={item} />
                                        )}
                                        ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
                                    />
                                    : <View style={styles.noData}>
                                        <Text>No data found!</Text>
                                    </View>
                        }
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default EmployeeListScreen

const styles = StyleSheet.create({
    appBar: {
        height: 56,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: 'black'
    },
    loading: {
        justifyContent: 'center',
        height: 500
    },
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    noData: {
        justifyContent: 'center',
        height: 500,
        alignItems: 'center'
    }
})