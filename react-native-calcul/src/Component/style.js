import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { borderWidth: 1, borderColor: '#999', padding: 10, marginBottom: 8, borderRadius: 4 },
  result: { fontSize: 24, marginVertical: 16 },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',  
    margin:10,

  },
  buttonWrapper: {
    marginHorizontal:4,
    padding:10,
  },
  btn_style : {
    width:20,
    height:30
  }
});
