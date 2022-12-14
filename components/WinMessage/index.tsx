import React from 'react';
import { Easing, StyleSheet } from 'react-native';
import { useAnimatedStyle, withDelay, withTiming } from 'react-native-reanimated';
import { checkAnswer } from '../../hooks';
import { Answers, ResultObject } from '../../types';
import { AnimatedText } from '../Theme/Themed';

export const showWinMessage = (result: ResultObject, answer: Answers, guesses: number) => {
  const checkedAnswer = guesses > 0 ? checkAnswer(result, answer[guesses - 1].userInput) : false;
  const config = {
    duration: 1000,
    easing: Easing.ease,
  };

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = withDelay(1000, withTiming(checkedAnswer ? 1 : 0, config));
    return {
      opacity,
    };
  });

  return guesses !== 0 && checkedAnswer ? (
    <AnimatedText style={[styles.infoText, animatedStyle]}>Nice Job!</AnimatedText>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  infoText: {
    fontSize: 42,
    letterSpacing: 6,
    paddingVertical: 22,
  },
});
