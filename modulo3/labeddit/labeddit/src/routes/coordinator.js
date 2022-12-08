export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}

export const goToFeed = (navigate) => {
    navigate("/")
}

export const goToPost = (navigate, id) => {
    navigate(`/detalhe/${id}`)
}