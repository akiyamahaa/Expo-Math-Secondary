import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, Text } from "native-base";
import { EFont } from "../types/utils";
import BoxQuestion from "./BoxQuestion";
import { Image } from "expo-image";

type Props = {
  imageUrl: string;
  answerTag?: ChildNode | null;
};

const FormulaLogic = (props: Props) => {
  const { imageUrl } = props;
  return (
    <HStack space={8} alignItems={"center"}>
      {/* Formula */}
      <HStack height={160} space={2}>
        <Image
          style={{
            width: 200,
            borderRadius: 12
          }}
          contentFit="contain"
          source={{ uri: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/4/19/799500/Cau-Do-Tinh-Toan5.jpg' }} />
      </HStack  >
      <Text color={"white"} fontSize={48} fontFamily={EFont.Quicksand_700Bold}>
        =
      </Text>
      {/* Box Ques */}
      {props.answerTag ? props.answerTag : <BoxQuestion size={"M"} />}
      {/* Box Ans */}
    </HStack>
  );
};

export default FormulaLogic;

const styles = StyleSheet.create({});
