import { Request, Response, Router} from "express"

export const router = Router();

router.get('/', (req: Request, res: Response) =>
{
    res.json({msg: "MyWeather App user services"})
})

router.post('/auth/', (req: Request, res: Response) => {
    const { email, password } = req.body
    res.json({msg: `Call to authenticate a user with email: ${email} password: ${password}`})
})

router.post('/authz/', (req: Request, res: Response) => {
    res.json({msg: 'Call to authorize a user'})
})