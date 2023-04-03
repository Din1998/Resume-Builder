import PdfGenarator from "./PdfGenarator";


export default function LivePreview({input}){

  return(
    <div className="live__preview">
        <PdfGenarator input={input} />
    </div>
  )
}