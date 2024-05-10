import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import LessonLayout, { ETypeImage } from "../components/LessonLayout";
import { Center, VStack, useTheme } from "native-base";
import GroupAnswer from "../components/GroupAnswer";
import { IQuizImage } from "../types/utils";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProps } from "../navigations/config";
import PopupRightAnswer from "../components/PopupRightAnswer";
import FormulaLogic from "../components/FormulaLogic";

type Props = {};

const listTestImage: IQuizImage[] = [
  {
    imageUrl: "",
    choices: [5, 3, 1],
    answer: 5,
  },
  {
    imageUrl: "",
    choices: [5, 3, 1],
    answer: 5,
  },
];

const QuizLogic = (props: Props) => {
  const { colors } = useTheme();
  const navigation = useNavigation<ScreenNavigationProps>();
  const [answerTag, setAnswerTag] = useState<ChildNode | null>(null);
  const [quesIndex, setQuesIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleNextQues = () => {
    if (quesIndex < listTestImage.length - 1) {
      setQuesIndex(quesIndex + 1);
      setAnswerTag(null);
      setShowModal(false);
    } else {
      setAnswerTag(null);
      setShowModal(false);
      navigation.navigate("Collection");
    }
  };

  useEffect(() => {
    if (answerTag) {
      setShowModal(true);
    }
  }, [answerTag]);

  return (
    <LessonLayout
      iconSource={require("../../assets/images/bg-1.png")}
      type={ETypeImage.LOGIC}
    >
      <PopupRightAnswer
        showModal={showModal}
        setShowModal={setShowModal}
        handleBtn={handleNextQues}
      />
      <Center flex={1}>
        <VStack space={10}>
          <FormulaLogic
            imageUrl={listTestImage[quesIndex].imageUrl}
            answerTag={answerTag}
          />
          <GroupAnswer
            size="M"
            dataAnswer={{
              choices: listTestImage[quesIndex].choices,
              answer: listTestImage[quesIndex].answer,
            }}
            answerTag={answerTag}
            setAnswerTag={setAnswerTag}
          />
        </VStack>
      </Center>
    </LessonLayout>
  );
};

export default QuizLogic;

const styles = StyleSheet.create({});
