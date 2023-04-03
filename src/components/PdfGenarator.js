import {
  Document,
  Text,
  Page,
  View,
  StyleSheet,
  PDFViewer,Font

} from "@react-pdf/renderer"


const style = StyleSheet.create({
  Page: {
    backgroundColor: "#fff",
    color: "black",
    flex: true,
  },

  section: {
    padding: 40,
   
  },
  viewer : {
    width: 600,
    height: 600,
  },
  text: {
    justifyContent: 'center',
    display: 'flex',
  }

})


export default function PdfGenarator({input}){
  return(
    <PDFViewer style={style.viewer}>
      <Document>
        <Page style={style.Page}>
          <View style={style.section}>
            <Text style={style.text} >{input}</Text>
            <Text style={style.text} >Helllowww</Text>
              <View >
                <Text>Helllowww</Text>
              </View>
          </View>
          
        </Page>
      </Document>
    </PDFViewer>
  )
}