import { useForm } from "react-hook-form";

export default function Form() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Enter Full Name..." {...register("fullName")} />
            <input type="text" placeholder="Enter your Email..." {...register("email")} />
            <input type="password" placeholder="Enter Password..." {...register("pass")} />
            <input type="password" placeholder="Confirm Password..." {...register("confPass")} />
            <input type="submit" />
        </form>
    )
}