import NextHead from "next/head";

export const Head = ({title})=>{
  
  return  (<NextHead>
    <title>{title || 'App'}</title>
    <meta name="description" content="Test task" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </NextHead>)
}