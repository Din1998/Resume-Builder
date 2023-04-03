import React, { useRef,useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor(){

  const [input,setInput] = useState('Write your Objective')
  console.log(input)

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent({format: 'text'}));
    }
  };

  return (
    <>
      <Editor
        apiKey='vpaahy9e4dpvzwq1ys8sqiu6s1ydlbthce76k3x449htwccg'
        cloudChannel='5-dev'
        value={input}
        onInit={(evt, editor) => editorRef.current = editor}
        onEditorChange={(newValue, editor) => {
          setInput(newValue);
          // setText(editor.getContent({format: 'text'}));
        }}
       
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      
    </>
  );

}