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
    width: 600,
    height: 600,
  }
})


export default function PdfGenarator(){
  return(
    <PDFViewer style={style.viewer}>
      <Document>
        <Page>
          <View style={style.section}>
            <Text>Helllowww</Text>
          </View>
          <View style={style.section}>
            <Text>Helllowww</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}