import Container from "@material-ui/core/Container";
import {CssBaseline, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import {addClientToQueue} from "../../api/queueApi";
import * as yup from "yup";
import {Field, FieldArray, Form, Formik} from "formik"
import {Select} from "material-ui-formik-components/Select"
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme) => ({
    text: {},
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    wrapper: {
        marginBottom: '20px',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(2, 2, 0),
    },
}));

const validationSchema = yup.object().shape({
    name: yup.string().min(3, 'Name must have at least 3 letters').required('Name is required'),
    lastname: yup.string().min(3, 'Lastname must have at least 3 letters').required('Lastname is required'),
    userId: yup.number().required("Please select specialist"),
});

const ClientForm = () => {
    const classes = useStyles();
    const history = useHistory();

    const submitForm = (formValues, formikHelpers) => {
        formikHelpers.setSubmitting(true);
        addClientToQueue(formValues)
            .then(() => {
                history.push("/");
            })
            .finally(() => {
                formikHelpers.setSubmitting(false);
            })
    };

    return (
        <Formik
            initialValues={{
                name: '',
                lastname: '',
                userId: 0,
            }}
            onSubmit={submitForm}
            validationSchema={validationSchema}
        >
            {(props) => {
                const {
                    values,
                    touched,
                    errors,
                    handleBlur,
                    handleChange,
                    isSubmitting,
                } = props
                return (
                    <>
                        {/*<PropsState {...props}/>*/}
                        <Container component="main" maxWidth="xs" className={classes.wrapper}>
                            <CssBaseline/>
                            <div className={classes.paper}>
                                <Typography component="h1" variant="h5">
                                    Choose a specialist
                                </Typography>
                            </div>
                            <Form className={classes.form}>
                                <Grid container
                                      spacing={2}
                                      alignItems="center"
                                      justify="center">
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            className={classes.text}
                                            id='name'
                                            label='Name'
                                            type="text"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.name ? errors.name : ""}
                                            error={touched.name && Boolean(errors.name)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            className={classes.text}
                                            id='lastname'
                                            label='Lastname'
                                            type="text"
                                            value={values.lastname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={touched.lastname ? errors.lastname : ""}
                                            error={touched.lastname && Boolean(errors.lastname)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            onBlur={handleBlur}
                                            fullWidth
                                            error={touched.userId && Boolean(errors.userId)}
                                            helperText={touched.userId ? errors.userId : ""}
                                            name="userId"
                                            label="Specialist"
                                            options={[
                                                {value: 0, label: ""},
                                                {value: 1, label: "Specialist1"},
                                                {value: 2, label: "Specialist2"},
                                                {value: 3, label: "Specialist3"},
                                            ]}
                                            component={Select}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            color="primary"
                                            variant="contained"
                                            disabled={isSubmitting}
                                            fullWidth
                                        >
                                            SUBMIT
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        </Container>
                    </>
                )
            }}
        </Formik>
    );
}

export default ClientForm;

