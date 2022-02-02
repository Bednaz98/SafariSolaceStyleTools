import React, { useState } from "react";
import { Modal, View,StyleSheet, Button } from "react-native";
import BasicButton from "./basicbutton";
import BasicText from "./basictext";
import GetColor, { Color } from "./colorstyle";



export default function BasicModal(){
  const [show, setShow] = useState(false);
  const styles = StyleSheet.create({

    modalView: {
      margin: 20,
      backgroundColor:GetColor(Color.Modal),
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0
      }
  }
});

    return(
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          onRequestClose={() => {setShow(!show)}}>
          <View style={ {flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22, backgroundColor:GetColor(Color.Modal)} }>
            <BasicText text={"hello"}/>
            <View style={styles.modalView}>
              <BasicButton title={"close"} onPress={()=>{setShow(!show)}}/>
            </View>
          </View>
        </Modal>

        <BasicButton title={"open"} onPress={()=>{setShow(true)}}/>

      </View>)
      
}



