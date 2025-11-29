export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (data: RegisterSchema) => {
    setIsLoading(true);
    setError("");
  };
};
