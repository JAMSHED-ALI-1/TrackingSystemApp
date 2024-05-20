import { StyleSheet } from "react-native";

const switchButtonStyle = StyleSheet.create({
  main_switch_box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  switch_box: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#fff",
    padding: 4,
    paddingTop: 12,
    paddingBottom: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
    flexBasis: 0,
    flexGrow: 1,
  },
  switch_text: {
    flex: 1,
    fontSize: 12,
    fontWeight: "600",
  },
  switch_container_box: {
    flex: 1,
  },
  switch_container: {
    justifyContent: "center",
  },
  switch: {
    position: "absolute",
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
});
export default switchButtonStyle;
