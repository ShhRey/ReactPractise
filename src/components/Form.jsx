import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function Form() {
    // Schema for Validation of Data can also be written via Regex
    const schema = yup.object().shape({
        fullName: yup.string().required('Full Name is required'),
        email: yup.string().email('Must be a valid email').required('Email required'),
        // password: yup.string().min(6, 'at least 6 characters').required('Password required'),
        // confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
        msg: yup.string().required('Enter Comment')
    });

    // Calling required function from react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm({
        // Specifying the Format of our Form
        resolver: yupResolver(schema)
    });

    // Function to Display the user submitted data
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form style={{marginTop: "50px"}} onSubmit={handleSubmit(onSubmit)}>
            <h2>Want to Talk about Something? Drop a Message</h2>
            <div>
                <input type="text" placeholder="Enter Full Name..." {...register('fullName')} />
                {errors.fullName && <p>{errors.fullName.message}</p>}
            </div>
            <div>
                <input type="text" placeholder="Enter your Email..." {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            {/* <div>
                <input type="password" placeholder="Enter Password..." {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div>
                <input type="password" placeholder="Confirm Password..." {...register('confirmPassword')} />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div> */}
            <div>
                <textarea name="comment" placeholder="Enter your Message" {...register('msg')}></textarea>
                {errors.msg && <p>{errors.msg.message}</p>}
            </div>
            <input type="submit" />
        </form>
    )
}