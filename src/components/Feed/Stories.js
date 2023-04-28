import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { USERS } from '../../assets/data/users';

const Stories = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    USERS.map((story, index) => (
                        <View key={index} style={styles.storyContainer}>
                            <Image style={styles.story} source={{ uri: story.image }} />
                            <Text style={styles.storyText}>{story.user.length > 5 ? story.user.slice(0, 7).toLocaleLowerCase() + '... ' : story.user.toLowerCase()}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginBottom: 13,
    },
    storyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    story: {
        width: 70,
        height: 70,
        marginLeft: 5,
        borderWidth: 3,
        borderColor: '#ff8501',
        borderRadius: 70,
    },
    storyText: {
        color: 'white',
    }
});
export default Stories;