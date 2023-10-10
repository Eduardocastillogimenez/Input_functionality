import React, { useState, useEffect } from 'react';
import { AutoComplete, Input, Tag } from 'antd';
import type { SelectProps } from 'antd/es/select';
import { PlusOutlined } from '@ant-design/icons';

const optionInfo = [
    {
        name: "Suma",
        text: "agrega un rango seleccionado",
        use: "Funcion"
    },
    {
        name: "Gastos de seguto medico",
        text: "",
        use: "Calculo"
    },
    {
        name: "Seguro de salud por empleado",
        text: "",
        use: "Divisa"
    },
    {
        name: "Power",
        text: "Eleva un numero",
        use: "Funcion"
    },
]

const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = ( ) =>

    optionInfo
    .map((e, idx) => {
    //   const category = `${query}${idx}`;
      return {
        value: e.name,
        label: (
            <div>
                <div
                    style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    }}
                >
                    <span>
                        {e.name}
                    </span>
                    <span style={{color : "gray"}}>{e.use}</span>
                </div>
                <p style={{color : "gray"}}>{e.text}</p>
            </div>
        ),
      };
    });

    export interface Text {
        text: string|undefined
    }

const Auto = (props: Text) => {
  const [options, setOptions] = useState<SelectProps<object>['options']>(searchResult) ;
  const [options2, setOptions2] = useState<SelectProps<object>['options']>(searchResult) ;


  const handleSearch = (value: string) => {
    // setOptions(value ? searchResult(value) : []);
  };

  useEffect(() => {
    if(options && props.text){
        const resultado = options.filter((elemento: any) =>
        elemento.value.includes(props.text)
      );
      setOptions2(resultado);
      console.log(resultado);
    }
  }, [props.text]);

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return (
    props.text?
        <AutoComplete
        popupMatchSelectWidth={252}
        style={{ width: "100%" }}
        options={options2}
        onSelect={onSelect}
        onSearch={handleSearch}
        onChange={alert}
        size="large"
        value={props.text}
        />
    :
        <AutoComplete
        popupMatchSelectWidth={252}
        style={{ width: "100%" }}
        options={options2}
        />
  );
};

export default Auto;