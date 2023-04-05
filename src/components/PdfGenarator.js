import {
  Document,
  Text,
  Page,
  View,
  StyleSheet,
  PDFViewer,


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
    width: 500,
    height: 400,
  },
  titleFontSize: {
    fontSize: "24",
    lineHeight:2,
    fontWeight: "ultrabold"
  },
  titlePadding: {
    paddingTop: 12
  },
  textLineHeight: {
    lineHeight: 1.5
  },
  text: {
    justifyContent: 'center',
    display: 'flex',
  }




})


export default function PdfGenarator({ personalInfo }){





  console.log(personalInfo)
  return(
    <PDFViewer style={style.viewer}>
      <Document>
        <Page style={style.Page}>
          <View style={style.section}>
            <View >
              <View >
                <Text style={style.titleFontSize}>{personalInfo.fristName} {personalInfo.lastName}</Text>
              </View>
              
              <Text style={style.textLineHeight}>{personalInfo.jobTitle}</Text>
              <View style={style.address}>
                <Text style={style.textLineHeight}>{personalInfo.city} {personalInfo.zipeCode} {personalInfo.country}</Text>
              </View>
              <View style={style.titlePadding}>
                <Text >Phone: {personalInfo.phone}</Text>
                <Text style={style.textLineHeight}>Email: {personalInfo.email}</Text>
              </View>
              <View style={style.titlePadding}>
                <Text>{personalInfo.objective}</Text>
              </View>
              <View style={style.titlePadding}>
                <Text style={style.titleFontSize}>Skills:</Text>
                <Text style={style.textLineHeight}>{personalInfo.skills}</Text>
              </View>
              <View style={style.titlePadding}>
                <Text style={style.titleFontSize}>{personalInfo.companyName}</Text>
                <Text style={style.textLineHeight}>{personalInfo.jobTitle}</Text>
                <Text style={style.textLineHeight}>{personalInfo.startDate} | {personalInfo.endDate}</Text>
                <Text style={style.textLineHeight}>{personalInfo.jobResponse}</Text>
              </View>
              <View style={style.titlePadding}>
                <Text style={style. titleFontSize}>{personalInfo.schoolName}</Text>
                <Text style={style.textLineHeight}>Subject: {personalInfo.subject}</Text>
                <Text style={style.textLineHeight}>GPA: {personalInfo.gpa}</Text>
              </View>
              <View style={style.titlePadding}>
                <Text style={style.textLineHeight} >{personalInfo.socialLink1}</Text>
                <Text style={style.textLineHeight} >{personalInfo.socialLink2}</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}