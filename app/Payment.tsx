import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const Payment = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    date: Yup.string().required("Date is required"),
    fromTime: Yup.string().required("Start time is required"),
    toTime: Yup.string().required("End time is required"),
    price: Yup.string().required("Price is required"),
    contactNumber: Yup.string().required("Contact number is required"),
  });

  const handleSubmit = (values) => {
    Alert.alert("Form Data", JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={{
        name: "Harshil",
        date: "10-04-2003",
        fromTime: "10:00 AM",
        toTime: "12:00 PM",
        price: "1000",
        contactNumber: "9879828263",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Booking Details</Text>

          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
          />
          {touched.name && errors.name && (
            <Text style={styles.errorText}>{errors.name}</Text>
          )}

          <Text style={styles.label}>Date:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("date")}
            onBlur={handleBlur("date")}
            value={values.date}
          />
          {touched.date && errors.date && (
            <Text style={styles.errorText}>{errors.date}</Text>
          )}

          <Text style={styles.label}>From:</Text>
          <View style={styles.timeContainer}>
            <TextInput
              style={styles.timeInput}
              onChangeText={handleChange("fromTime")}
              onBlur={handleBlur("fromTime")}
              value={values.fromTime}
            />
            <Text style={styles.label}> - </Text>
            <TextInput
              style={styles.timeInput}
              onChangeText={handleChange("toTime")}
              onBlur={handleBlur("toTime")}
              value={values.toTime}
            />
          </View>
          {touched.fromTime && errors.fromTime && (
            <Text style={styles.errorText}>{errors.fromTime}</Text>
          )}
          {touched.toTime && errors.toTime && (
            <Text style={styles.errorText}>{errors.toTime}</Text>
          )}

          <Text style={styles.label}>Contact Number:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("contactNumber")}
            onBlur={handleBlur("contactNumber")}
            value={values.contactNumber}
          />
          {touched.contactNumber && errors.contactNumber && (
            <Text style={styles.errorText}>{errors.contactNumber}</Text>
          )}

          <Text style={styles.label}>Price:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("price")}
            onBlur={handleBlur("price")}
            value={values.price}
          />
          {touched.price && errors.price && (
            <Text style={styles.errorText}>{errors.price}</Text>
          )}

          <View style={styles.buttonContainer}>
            <Button
              title="Make Payment"
              onPress={handleSubmit}
              color="#007AFF"
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#E5E5EA",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: "#000",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  timeInput: {
    flex: 1,
    backgroundColor: "#E5E5EA",
    borderRadius: 5,
    padding: 10,
    color: "#000",
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default Payment;
