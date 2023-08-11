
const NewProductDescription = ({ Product }) => {

    return (
        <div className="row center mt-4 mx-1">
            <div className="col-lg-10 NewProductDescription_container py-4">
                <h1>Product Description</h1>

                <p className="">  <div  dangerouslySetInnerHTML={{ __html: Product }} /></p>

            </div>

        </div>
    )
}
export default NewProductDescription