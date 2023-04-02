import {
  Document,
  Text,
  Page,
  View,
  StyleSheet,
  PDFViewer

} from "@react-pdf/renderer"


const style = StyleSheet.create({
  Page: {
    backgroundColor: "#000",
    color: "Black"
  },

  section: {
    margin: 10,
  },
  viewer : {
    width: window.innerWidth / 3,
    height: window.innerHeight / 2
  }
})


export default function PdfGenarator(){
  return(
    <PDFViewer style={style.viewer}>
      <Document>
        <Page size="A4" style={style.Page}>
          <View style={style.section}>
            <Text>Helllowww</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}