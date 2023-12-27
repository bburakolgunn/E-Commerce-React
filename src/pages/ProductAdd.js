import { Formik, Form , Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button, FormField, Label } from 'semantic-ui-react';
import CommerceTextInput from '../utilities/customFormControls/CommerceTextInput';

export default function ProductAdd() {

    const initialValues = { productName: "", unitPrice: "" }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunludur.")
    })

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={schema}
                onSubmit = {(values)=>{
                    console.log(values)
                }}
                >
                <Form className='ui form'>
                    <CommerceTextInput name="productName" placeholder = "Ürün Adı"/>
                    <CommerceTextInput name="unitPrice" placeholder = "Ürün Fiyatı"/>
                    <Button color="green" type='submit'>Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
