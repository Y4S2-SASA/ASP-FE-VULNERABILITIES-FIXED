import PreviewCarousel from "../../components/PreviewPage/Carousel"
import PreviewFooter from "../../components/PreviewPage/PreviewFooter"
import PreviewHeader from "../../components/PreviewPage/PreviewHeader"
import ServiceCards from "../../components/PreviewPage/ServiceCards"

export default function PreviewSite() {

    const ServiceHead = () => {
        return (
            <>
                <br/><br/>
                <p className="font-sans text-4xl antialiased font-semibold text-center underline underline-offset-8">Our Services</p>
                <br/>
                <p className="font-mono text-base antialiased font-thin text-center ">We are committed to supplying all types of automotive replacement parts. Our product line includes vehicle bumper guards, side steps, grilles, spoilers, roof racks, and inner and exterior chrome decorations, among other things. Top quality at a reasonable price and honest service are our main weapons in attracting and retaining customers.</p>
                <br/><br/>
            </>
        );
    }
    return (
        <div className="container">
            <PreviewHeader />
            <PreviewCarousel />
            <ServiceHead/>
            <ServiceCards />
            <br/><br/>
            {/* <PreviewFooter /> */}
        </div>
    )
}