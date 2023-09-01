
interface cssType {
    transform?: string
    paddingTop?: number
    paddingBottom?: number
    marginTop?: number
  }
  interface sizeType {
    w: number
    h: number
    }
export const getSizeCss=(size:sizeType)=>{
    let filling=0;
    const sizeCss=(()=>{
      const w=size.w
      const h=size.h
      const ratio=h/w
      let scale;
      let css:cssType={};
      if(ratio<1.5){
        scale=h/960;
      }else{
        scale=w/640;
        filling=(h-960*scale)/scale/3;
        console.log(filling);
        css= {
          paddingTop: Math.floor(filling) + 42,
          paddingBottom: Math.floor(filling),
          marginTop: Math.floor(-480 - (filling * 1.5)),
        };
      }
      css.transform = `scale(${scale})`;
      return css
      })();
      console.log(sizeCss);
      return sizeCss;
}