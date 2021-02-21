import React, { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    if (palabras.length > 0) setIncluye(false)

    setTimeout(() => {
      setCategoria(Math.floor(Math.random() * (Math.floor(12) - Math.ceil(20)) + Math.ceil(20)))
      setOracion(Math.floor(Math.random() * (Math.floor(1) - Math.ceil(25)) + Math.ceil(25)))
      setColores(Math.floor(Math.random() * (Math.floor(0) - Math.ceil(4)) + Math.ceil(4)))
    }, 500);

  }, []);

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const [count, setCount] = useState(1);

  const [categoria, setCategoria] = useState(0);
  const [oracion, setOracion] = useState(0);

  const [incluye, setIncluye] = useState(false);

  const [palabras, setPalabras] = useState([]);

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);
  const [nine, setNine] = useState(false);
  const [teen, setTeen] = useState(false);
  const [eleven, setEleven] = useState(false);
  const [twelve, setTwelve] = useState(false);

  const newPalabras = palabras.slice()

  const nextLevel = () => {
    if (palabras.length > 0 | incluye) {
      setTimeout(() => {
        setCategoria(Math.floor(Math.random() * (Math.floor(12) - Math.ceil(20)) + Math.ceil(20)))
        setOracion(Math.floor(Math.random() * (Math.floor(1) - Math.ceil(25)) + Math.ceil(25))) 
      }, 500);

      setCount(count + 1)
      palabras.splice(0, palabras.length)
      setOne(false); setTwo(false); setThree(false); setFour(false); setFive(false); setSix(false); setSeven(false)
      setEight(false); setNine(false); setTeen(false); setEleven(false); setTwelve(false); setIncluye(false)

      Oraciones[oracion][categoria].sort()

      if (JSON.parse(Oraciones[oracion][categoria].length) == JSON.parse(newPalabras.length)) {
        if (JSON.stringify(Oraciones[oracion][categoria]) == JSON.stringify(newPalabras)) setCorrect(correct + 1)
        else if (JSON.stringify(Oraciones[oracion][categoria]) !== JSON.stringify(newPalabras)) setWrong(wrong + 1)
      } else if (JSON.parse(Oraciones[oracion][categoria].length) !== JSON.parse(newPalabras.length)) setWrong(wrong + 1)
    } else alert('Selecciona al menos una palabra o haz click en "No las incluye" para evaluar tu respuesta')
  }

  const Agregar = (number, index, setNumber) => {
      if (number == true) { palabras.pop(Oraciones[oracion][index]); setNumber(false) }
      else if (number == false) { palabras.push(Oraciones[oracion][index]); setNumber(true); palabras.sort() }
  }

  const noIncluye = () => {
    setIncluye(state => !state)
    if (incluye === false) {
      palabras.splice(0, palabras.length)
      setOne(false); setTwo(false); setThree(false); setFour(false); setFive(false); setSix(false); setSeven(false)
      setEight(false); setNine(false); setTeen(false); setEleven(false); setTwelve(false); setIncluye(true)
    }
  }

  const oracionDeCategoria = [
    '', '', '', '', '', '', '', '', '', '', '', 'Loading...',
    'Cuales son los Sustantivos en la siguiente oracion?',
    'Cuales son los Adjetivos en la siguiente oracion?',
    'Cuales son los Articulos en la siguiente oracion?',
    'Cuales son los Pronombres en la siguiente oracion?',
    'Cuales son los Verbos en la siguiente oracion?',
    'Cuales son los Adverbios en la siguiente oracion?',
    'Cuales son las Interjecciones en la siguiente oracion?',
    'Cuales son las Preposiciones en la siguiente oracion?',
    'Cuales son las Conjunciones en la siguiente oracion?',
  ]

  //Sustantivos, Adjetivos, Articulos, Pronombres, Verbos, Adverbios, Interjecciones, Preposiciones, Conjunciones

  const Oraciones = [
    ['...'],
    ['Toneladas', 'de', 'tomates', 'cayeron', 'a', 'las', 'calles.', '', '', '', '', '', ['tomates', 'calles'], [], ['las'], [], ['cayeron'], ['Toneladas'], [], ['de', 'a'], []],
    ['¿A', 'qué', 'hora', 'tienes', 'previsto', 'llegar?', '', '', '', '', '', '', ['hora'], [], [], ['qué'], ['tienes', 'previsto', 'llegar?'], ['hora'], [], ['¿A'], []],
    ['Esta', 'parte', 'de', 'la', 'primavera', 'es', 'mi', 'favorita.', '', '', '', '', ['primavera'], ['Esta', 'la', 'mi', 'favorita'], ['la'], ['mi'], ['es'], ['parte'], [], ['de'], []],
    ['Jamás', 'entendí', 'como', 'tu', 'familia', 'llegó', 'hasta', 'aquí.', '', '', '', '', ['familia'], [], [], ['tu'], ['entendí', 'llegó'], ['Jamás', 'como', 'aquí.'], [], ['hasta'], []],
    ['Nunca', 'he', 'visto', 'un', 'hombre', 'que', 'mienta', 'tanto.', '', '', '', '', ['hombre'], ['que'], ['un'], ['he'], ['visto', 'mienta'], ['Nunca', 'tanto.'], [], [], []],
    ['Espero', 'que', 'mañana', 'te', 'sientas', 'mejor.', '', '', '', '', '', '', [], ['que'], [], ['te'], ['Espero', 'sientas'], ['mañana', 'mejor'], [], [], []],
    ['¿Has', 'oído', 'la', 'radio', 'hoy?', '', '', '', '', '', '', '', ['radio'], [], ['la'], ['¿Has'], ['oído'], ['hoy?'], [], [], []],
    ['Esa', 'construcción', 'es', 'del', 'año', '1572.', '', '', '', '', '', '', ['construcción', 'año'], ['Esa', '1572'], [], [], ['es'], [], [], ['del'], []],
    ['Es', 'la', 'cuarta', 'vez', 'que', 'pido', 'que', 'se', 'callen.', '', '', '', ['vez'], ['que'], ['la'], ['se'], ['Es', 'pido', 'callen'], ['cuarta'], [], [], ['que']],
    ['La', 'primera', 'función', 'fue', 'solamente', 'para', 'la', 'prensa.', '', '', '', '', ['función', 'prensa'], [], ['La', 'la'], [], ['fue'], ['primera', 'solamente'], [], ['para'], []],
    ['La', 'semana', 'que', 'viene', 'empezaré', 'un', 'nuevo', 'curso.', '', '', '', '', ['semana', 'curso'], ['que', 'nuevo'], ['La', 'un'], [], ['viene', 'empezare'], [], [], [], []],
    ['Me', 'gustaría', 'que', 'vengan', 'todos', 'a', 'mi', 'cumpleaños.', '', '', '', '', ['todos', 'cumpleaños.'], ['que'], [], ['Me', 'mi'], ['gustaría', 'vengan'], [], [], ['a'], []],
    ['El', 'hermano', 'de', 'mi', 'tía', 'vive', 'en', 'El Salvador.', '', '', '', '', ['hermano', 'tia', 'El Salvador'], [], ['El'], ['Me', 'todos', 'mi'], ['vive'], [], [], ['de', 'en'], []],
    ['Luego', 'de', 'la', 'operación,', 'deberá', 'cuidarse', 'mucho', 'más.', '', '', '', '', ['operación,'], ['mucho', 'más.'], ['la'], [], ['deberá', 'cuidarse'], ['Luego', 'mucho'], [], ['de'], []],
    ['Yo', 'soy', 'uruguayo,', 'pero', 'toda', 'mi', 'familia', 'es', 'de', 'Brasil.', '', '', ['Yo', 'familia', 'Brasil.'], ['uruguayo'], [], ['Yo', 'mi'], ['soy', 'es'], ['toda'], [], ['de'], ['pero']],
    ['¿Es', 'necesario', 'hacer', 'eso', 'en', 'público?', '', '', '', '', '', '', ['eso', 'público?'], ['necesario'], [], [], ['¿Es', 'hacer'], ['necesario'], [], ['en'], []],
    ['No', 'se', 'puede', 'correr', 'en', 'esta', 'plaza.', '', '', '', '', '', ['plaza.'], ['esta'], [], ['se'], ['puede', 'correr'], [], [], ['No', 'en'], []],
    ['Ganó', 'fortunas,', 'pero', 'las', 'desperdició', 'en', 'la', 'ruleta.', '', '', '', '', ['fortunas,', 'ruleta.'], [], ['las', 'la'], [], ['Ganó', 'desperdició'], [], [], ['en'], ['pero']],
    ['Los', 'estudios', 'le', 'dieron', 'bien', 'pero', 'los', 'médicos', 'quieren', 'una', 'segunda', 'opinión.', ['estudios', 'médicos', 'opinión.'], ['bien'], ['Los', 'los', 'una'], ['le'], ['dieron', 'quieren'], ['bien', 'segunda'], [], [], ['pero']],
    ['Tengo', 'ganas', 'de', 'irme', 'de', 'viaje.', '', '', '', '', '', '', ['ganas', 'viaje.'], [], [], [], ['Tengo', 'irme'], [], [], ['de', 'de'], []],
    ['Mi', 'hermano', 'es', 'más', 'alto', 'que', 'yo.', '', '', '', '', '', ['hermano', 'yo.'], ['alto', 'que'], [], ['Mi', 'yo.'], ['es'], ['más'], [], [], []],
    ['Descubrieron', 'los', 'documentos', 'dentro', 'del', 'cajón.', '', '', '', '', '', '', ['documentos', 'cajón.'], [], ['los'], [], ['Descubrieron'], ['dentro'], [], ['del'], []],
    ['¡Hostia!,', 'olvidé', 'que', 'hoy', 'es', 'cumpleaños', 'de', 'mi', 'padre.', '', '', '', ['cumpleaños', 'padre'], ['que'], [], ['mi'], ['olvidé', 'es'], ['hoy'], ['¡Hostia!,'], ['de'], []],
    ['¡¿Qué?!', '¿Pero', 'qué', 'pasa', 'aquí?', '', '', '', '', '', '', '', [], [], [], [], ['pasa'], ['qué', 'aquí?'], ['¡¿Qué?!'], [], ['¿Pero']],
    ['¡Mucho ojo!,', 'no', 'debes', 'confiar', 'en', 'todos.', '', '', '', '', '', '', ['todos.'], [], [], [], ['debes', 'confiar'], [], ['¡Mucho ojo!,'], ['no', 'en'], []]
  ]

  const Colores = [
    ['#314e52', '#f2a154', '#e7e6e1', '#c5d7bd'],
    ['#cd5d7d', '#a7c5eb', '#f6ecf0', '#949cdf'],
    ['#7579e7', '#9ab3f5', '#b9fffc', '#a3d8f4'],
    ['#1e212d', '#b68973', '#faf3e0', '#9fb835']
  ]

  const [colores, setColores] = useState(0);

  const Evaluaciones = [
    '(^▽^) Felicidades, eres el mejor!!!',
    'Lo hiciste bien!! pero todavia puedes mejorar (｡◕‿◕｡)',
    '(╥_╥) Te fue mal, pero puedes seguir intentandolo'
  ]

  useEffect(() => {
    if (correct >= 9) setEvaluacion(Evaluaciones[0])
    else if (correct == 7 | 8) setEvaluacion(Evaluaciones[1])
    else if (correct <= 6) setEvaluacion(Evaluaciones[2])
  }, );

  const [evaluacion, setEvaluacion] = useState('');

  if (count === 11) {
    return(
      <div style={{backgroundColor: '#ffff', display: 'flex'}}>
        <div style={{backgroundColor: Colores[colores][1], height: 80, width: '100%', position: 'absolute', top: 0}}></div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          marginTop: 150
        }}>
          <h1 style={{color: Colores[colores][0]}}>{evaluacion}</h1>
          <h3 style={{color: Colores[colores][1]}}>Respuestas correctas: {correct}</h3>
          <h3 style={{color: Colores[colores][1]}}>Respuestas incorrectas: {wrong}</h3>
        </div>
        <div
          onClick={() => {setCount(1); setWrong(0); setCorrect(0); setColores(Math.floor(Math.random() * (Math.floor(0) - Math.ceil(4)) + Math.ceil(4)))}}
          style={{
            backgroundColor: '#16c79a',
            height: 45,
            width: 180,
            display: 'flex',
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            borderRadius: 5,
            marginTop: 30,
            right: 100,
            bottom: 100
          }}
        >
          <p style={{color: '#ffff', fontSize: 20}}>Jugar de nuevo</p>
        </div>
        <div style={{backgroundColor: Colores[colores][1], height: 80, width: '100%', position: 'absolute', bottom: 0}}></div>
        <div style={{backgroundColor: Colores[colores][0], height: '100%', width: 80, position: 'absolute', right: 0}}></div>
        <div style={{backgroundColor: Colores[colores][0], height: '100%', width: 80, position: 'absolute', left: 0}}></div>
      </div>
    )
  } else {
    return (
      <div style={{backgroundColor: '#ffff', display: 'flex'}}>
        {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <p>{JSON.stringify(Oraciones[oracion][categoria])}</p>
          <p>{JSON.stringify(palabras)}</p>
          <p>correct: {correct}</p>
          <p>wrong: {wrong}</p>
        </div> */}
        
        <div style={{backgroundColor: Colores[colores][1], height: 80, width: '100%', position: 'absolute', top: 0}}></div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            marginTop: 80,
            marginLeft: 120,
            marginRight: 120
          }}>
            <p style={{color: Colores[colores][0], fontSize: 35}}>Categorias gramaticales</p>
            <p style={{color: Colores[colores][0], fontSize: 20, fontWeight: 300, marginTop: 40}}>{oracionDeCategoria[categoria]}</p>
            <div style={{
              backgroundColor: Colores[colores][2],
              height: 100,
              width: '100%',
              display: 'flex',
              alignSelf: 'flex-start',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <p
                onClick={() => Agregar(one, 0, setOne)}
                style={{
                  color: one ? '#923590' : Colores[colores][0],
                  textDecorationLine: one ? 'underline' : 'none',
                  textAlign: 'center', paddingRight: 6, fontSize: 30
                }}
              >{Oraciones[oracion][0]}</p>
              <p
                onClick={() => Agregar(two, 1, setTwo)}
                style={{
                  color: two ? '#923590' : Colores[colores][0],
                  textDecorationLine: two ? 'underline' : 'none',
                  textAlign: 'center', paddingRight: 6, fontSize: 30
                }}
              >{Oraciones[oracion][1]}</p>
              <p
                onClick={() => Agregar(three, 2, setThree)}
                style={{
                  color: three ? '#923590' : Colores[colores][0],
                  textDecorationLine: three ? 'underline' : 'none',
                  textAlign: 'center', paddingRight: 6, fontSize: 30
                }}
              >{Oraciones[oracion][2]}</p>
              <p
                onClick={() => Agregar(four, 3, setFour)}
                style={{
                  color: four? '#923590' : Colores[colores][0],
                  textDecorationLine: four ? 'underline' : 'none',
                  textAlign: 'center', paddingRight: 6, fontSize: 30
                }}
              >{Oraciones[oracion][3]}</p>
              <p
                onClick={() => Agregar(five, 4, setFive)}
                style={{
                  color: five ?'#923590' : Colores[colores][0],
                  textDecorationLine: five ? 'underline' : 'none',
                  textAlign: 'center', paddingRight: 6, fontSize: 30
                }}
              >{Oraciones[oracion][4]}</p>
              <p
                onClick={() => Agregar(six, 5, setSix)}
                style={{
                  color: six ? '#923590' : Colores[colores][0],
                  textDecorationLine: six ? 'underline' : 'none',
                  textAlign: 'center', paddingRight: 6, fontSize: 30
                }}
              >{Oraciones[oracion][5]}</p>
              <p
                onClick={() => Agregar(seven, 6, setSeven)}
                style={{
                  color: seven ? '#923590' : Colores[colores][0],
                  textDecorationLine: seven ? 'underline' : 'none',
                  textAlign: 'center', paddingRight: 6, fontSize: 30
                }}
              >{Oraciones[oracion][6]}</p>
              <p
                onClick={() => Agregar(eight, 7, setEight)}
                style={{
                  color: eight ?'#923590' : Colores[colores][0],
                  textDecorationLine: eight ? 'underline' : 'none',
                  textAlign: 'center', paddingRight: 6, fontSize: 30
                }}
              >{Oraciones[oracion][7]}</p>
              <p
                onClick={() => Agregar(nine, 8, setNine)}
                style={{
                  color: nine ? '#923590' : Colores[colores][0],
                  textDecorationLine: nine ? 'underline' : 'none',
                  textAlign: 'center', paddingRight: 6, fontSize: 30
                }}
              >{Oraciones[oracion][8]}</p>
              <p
                onClick={() => Agregar(teen, 9, setTeen)}
                style={{
                  color: teen ? '#923590' : Colores[colores][0],
                  textDecorationLine: teen ? 'underline' : 'none',
                  textAlign: 'center', paddingRight: 6, fontSize: 30
                }}
              >{Oraciones[oracion][9]}</p>
              <p
                onClick={() => Agregar(eleven, 10, setEleven)}
                style={{
                  color: eleven ? '#923590' : Colores[colores][0],
                  textDecorationLine: eleven ? 'underline' : 'none',
                  textAlign: 'center', paddingRight: 6, fontSize: 30
                }}
              >{Oraciones[oracion][10]}</p>
              <p
                onClick={() => Agregar(twelve, 11, setTwelve)}
                style={{
                  color: twelve ? '#923590' : Colores[colores][0],
                  textDecorationLine: twelve ? 'underline' : 'none',
                  textAlign: 'center', paddingRight: 6, fontSize: 30
                }}
              >{Oraciones[oracion][11]}</p>
            </div>
            <div 
              onClick={noIncluye}
              style={{
                backgroundColor: Colores[colores][0],
                opacity: incluye ? 1 : 0.5,
                height: 40,
                width: 180,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                marginTop: 15,
                marginBottom: 35
              }}
            >
              <p style={{color: '#ffff'}}>No las incluye</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 20}}>
              <div style={{marginRight: 20, alignSelf: 'flex-end'}}>
                <p>Nivel {count} de 10</p>
              </div>
              <div
                onClick={nextLevel}
                style={{
                  backgroundColor: Colores[colores][3],
                  height: 45,
                  width: 150,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                  marginTop: 20,
                  right: 100,
                  bottom: 100
                }}
              >
                <p style={{color: '#ffff', fontSize: 20}}>Siguiente</p>
              </div>
            </div>
          </div>
        <div style={{backgroundColor: Colores[colores][1], height: 80, width: '100%', position: 'absolute', bottom: 0}}></div>
        <div style={{backgroundColor: Colores[colores][0], height: '100%', width: 80, position: 'absolute', right: 0}}></div>
        <div style={{backgroundColor: Colores[colores][0], height: '100%', width: 80, position: 'absolute', left: 0}}></div>
      </div>
    );
  }
}

export default App;