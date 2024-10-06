import { StyleSheet, Text, View, Image } from "react-native";
import React, { Component } from "react";
import COLORS from "../../App/Constants/Color";

type Props = {
  name: string;
  ubi: string;
  temp: string;
  hmdd: string;
  AlertAct: string;
  AlertPron: string;
  imageTemp: any;
  imageHmdd: any;
};

class HuertosCards extends Component<Props>{
  render(){
    return (
        <View
          style={{
            height: 140,
            marginBottom: 10,
            marginHorizontal: 5,
            //borderWidth: 0.4,
            borderColor: COLORS.gray,
            backgroundColor: "#F8F8F8",
            borderRadius: 12,
            flexDirection: "row",
            justifyContent: "space-between",

            shadowColor: COLORS.gray, 
            shadowOpacity: 0.8, 
            shadowRadius: 5, 
            shadowOffset: {
              width: 0,
              height: 0,
            },
            elevation: 5, // Elevación para que la sombra se vea en Android
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>

            <Text style={{textAlign: "left", marginStart: 12, fontFamily: "Poppins_700Bold", fontSize:16, color: COLORS.dark2}}>
                {this.props.name}
            </Text>

            <Text style={{textAlign: "left", marginStart: 12, fontFamily: "Poppins_500Medium", fontSize: 12, color: COLORS.green, marginBottom:-5}}>
                {this.props.ubi}
            </Text>

            <Text style={{textAlign: "left", marginStart: 12, fontFamily: "Poppins_500Medium", fontSize: 12, color: COLORS.green, marginBottom:-5}}>
                Alertas Actuales: {this.props.AlertAct}
            </Text>

            <Text style={{textAlign: "left", marginStart: 12, fontFamily: "Poppins_500Medium", fontSize: 12, color: COLORS.green, marginBottom:-5}}>
                Alertas Pronosticadas: {this.props.AlertPron}
            </Text>

          </View>

          <View style={{flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "center"}}>
            <View>
              <Image
                source={this.props.imageTemp} 
                style={{width: 50, height: 50, resizeMode: "contain" }}
              />
              <Text style={{textAlign: "left", marginStart: 12, fontFamily: "Poppins_500Medium", fontSize: 12, color: COLORS.green, marginBottom:-5}}>
                  {this.props.temp}
              </Text>
            </View>

            <View>
              <Image
                source={this.props.imageHmdd} 
                style={{ marginStart: 20, width: 50, height: 50, resizeMode: "contain" }}
              />
              <Text style={{ marginStart: 20, textAlign: "center", fontFamily: "Poppins_500Medium", fontSize: 12, color: COLORS.green, marginBottom:-5}}>
                  {this.props.hmdd}
              </Text>
            </View>
          </View>
        </View>
      );
  }
};

export default HuertosCards;

const styles = StyleSheet.create({});
