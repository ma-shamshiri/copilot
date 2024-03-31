import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  Textarea,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import emailjs from "@emailjs/browser";

const schema = z.object({
  name: z.string(),
  description: z.string(),
  message: z.string(),
});

type FormData = z.infer<typeof schema>;

const variants: { [key: string]: any } = {
  initial: {
    y: 250,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const ContactUsForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isValid },
  //   reset,
  // } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = Object.keys(data).length > 0 ? data : {};
      const response = await fetch("https://formspree.io/f/xdoqwpoz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // toast.success("Form submitted successfully!");
        // Reset the form after a successful submission
        console.log("submitted");
        reset();
      } else {
        // toast.error("Error submitting form");
        console.log("Error submitting form");
      }
    } catch (error) {
      console.log("Error submitting form:", error);
      // toast.error("Error submitting form");
    }
  };

  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);
  // const formRef = useRef<HTMLFormElement>(null);
  // const [error, setError] = useState<boolean>(false);
  // const [success, setSuccess] = useState<boolean>(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const svgWidth = useBreakpointValue({ base: "20rem", lg: "30rem" });
  const svgHeight = useBreakpointValue({ base: "20rem", lg: "30rem" });
  const svgColor = useColorModeValue("#343399", "orange");

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <Box
        className="formContainer"
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        marginTop="1.5rem"
        overflow="hidden"
      >
        <Box
          position="relative"
          width={{ base: "100%", md: "70%", lg: "100%" }}
          maxWidth={{ base: "35rem", md: "35rem", lg: "35rem" }}
          minWidth={{ base: "initial", lg: "28rem" }}
          padding={{ base: "0.5rem", lg: "initial" }}
          justifyContent="center"
          alignItems="center"
        >
          <motion.div
            className="phoneSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <Box
              className="svgContainer"
              display="flex"
              justifyContent="center"
              height="100%"
              width="100%"
              stroke={svgColor}
              position="absolute"
              left={0}
              margin="auto"
              zIndex="-1"
            >
              <svg
                viewBox="0 0 32.666 32.666"
                style={{
                  width: svgWidth,
                  height: svgHeight,
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                // style={{ maxWidth: "100%", maxHeight: "100%" }}
              >
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ duration: 3 }}
                  d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
                        M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
                        C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
                        c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
                        c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
                        c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
                        c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
                        c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
                        c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
                        c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
                        c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
                        l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
                        C32.666,7.326,25.339,0,16.333,0z"
                />
              </svg>
            </Box>
          </motion.div>
          <motion.div
            //   onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <form
              // ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
              flex-direction="column"
            >
              <Box
                display="flex"
                flexDirection="column"
                gap="1rem"
                color={useColorModeValue("gray.800", "white")}
              >
                {/* <Input
                  className="nameInput"
                  name="name"
                  placeholder={t("name")}
                  type="text"
                  required
                  bg="transparent"
                  borderWidth="2px"
                  borderColor={useColorModeValue("gray.800", "white")}
                  borderRadius="7px"
                  _hover={{
                    borderColor: useColorModeValue("blue.600", "dodgerblue"),
                  }}
                /> */}

                <FormControl id="name">
                  {/* <FormLabel
                    className="form_label"
                    htmlFor="name"
                    fontSize={{ base: "1.8rem", lg: "1.7rem" }}
                  >
                    {t("name")}
                  </FormLabel> */}
                  <Box
                    // padding="1rem"
                    bg={useColorModeValue("#DDC887", "#232323")}
                    borderRadius="lg"
                  >
                    <ChakraInput
                      className="form_control"
                      id="name"
                      type="text"
                      placeholder={t("name")}
                      fontSize="1rem"
                      {...register("name")}
                    />
                  </Box>
                </FormControl>

                {/* <Input
                  className="emailInput"
                  name="email"
                  placeholder={t("email")}
                  type="email"
                  required
                  bg="transparent"
                  borderWidth="2px"
                  borderColor={useColorModeValue("gray.800", "white")}
                  borderRadius="7px"
                  _hover={{
                    borderColor: useColorModeValue("blue.600", "dodgerblue"),
                  }}
                /> */}

                <FormControl id="description">
                  {/* <FormLabel
                    className="form_label"
                    htmlFor="email"
                    fontSize={{ base: "1.8rem", lg: "1.7rem" }}
                  >
                    {t("email")}
                  </FormLabel> */}
                  <Box
                    // padding="1rem"
                    bg={useColorModeValue("#DDC887", "#232323")}
                    borderRadius="lg"
                  >
                    <ChakraInput
                      className="form_control"
                      id="description"
                      type="text"
                      placeholder={t("email")}
                      fontSize="1rem"
                      {...register("description")}
                    />
                  </Box>
                </FormControl>

                {/* <Textarea
                  className="messageInput"
                  name="message"
                  placeholder={t("message")}
                  rows={8}
                  bg="transparent"
                  borderWidth="2px"
                  borderColor={useColorModeValue("gray.800", "white")}
                  borderRadius="7px"
                  _hover={{
                    borderColor: useColorModeValue("blue.600", "dodgerblue"),
                  }}
                /> */}

                <FormControl id="message">
                  {/* <FormLabel
                className="form_label"
                htmlFor="message"
                fontSize={{ base: "1.8rem", lg: "1.7rem" }}
              >
                {t("message")}
              </FormLabel> */}
                  <Box
                    // padding="1rem"
                    bg={useColorModeValue("#DDC887", "#232323")}
                    borderRadius="lg"
                  >
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder={t("message")}
                      fontSize="1rem"
                      width="100%"
                      height="15rem"
                    />
                  </Box>
                </FormControl>
              </Box>
              <Box
                className="buttonContainer"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  className="submitButton"
                  type="submit"
                  width="100%"
                  marginTop="1rem"
                  padding={{ base: "0.5rem", lg: "1rem" }}
                  bg="orange"
                  // border="none"
                  cursor="pointer"
                  _hover={{
                    color: useColorModeValue("gray.800", "orange"),
                    bg: useColorModeValue("#F0E2B6", "#232323"),
                    borderWidth: "4px",
                    borderColor: "orange",
                    borderRadius: "7px",
                  }}
                >
                  {t("submit")}
                </Button>
              </Box>
            </form>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ContactUsForm;
