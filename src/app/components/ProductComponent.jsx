
import momentTimezone from 'moment-timezone';
import moment from 'moment';
import '../tweaks/momentLocale';
import { useEffect, useState } from 'react';
import { ProductContainer } from '../styled_components/ProductComponentStyled';

const ProductComponent = () => {
    const [formattedTime, setFormattedTime] = useState('');

    useEffect(() => {
        moment.locale('id');

        const timeZone = momentTimezone.tz("Asia/Jayapura").format('yy-M-DD HH:mm');
        const time = moment(timeZone).format('dddd, D MMM YYYY - HH:mm');

        setFormattedTime(time)
    }, [])

    return(
        <>
            <ProductContainer>
                <h1 className='testing'>Hello World {formattedTime}</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, temporibus culpa numquam quaerat labore distinctio? Nobis veniam cupiditate vel, necessitatibus non voluptas voluptatem architecto dicta perferendis, repudiandae natus. Blanditiis accusantium explicabo ducimus, consectetur perferendis temporibus esse omnis hic. Rem, quod! Voluptas, dolores dolorem quo pariatur ea totam rerum fuga reprehenderit consequuntur officiis earum deserunt ullam itaque omnis eos ad delectus reiciendis tempore, doloribus consequatur? Enim eum ea placeat voluptate aliquam voluptates saepe earum dolor soluta. Quae culpa ea consectetur quisquam eveniet porro sit officia doloribus recusandae ullam cupiditate, illum ipsam voluptates blanditiis. Ea porro, consequuntur nemo earum consequatur eos nisi maiores placeat nihil, natus, aliquam facere! Blanditiis iste iure eaque beatae qui similique commodi corrupti voluptate illo totam atque suscipit facere magni, fuga ducimus, ipsa praesentium. Voluptas, quam itaque nobis molestias officia excepturi tempore, fugiat fuga ipsam nostrum eius? Quis tempora praesentium non at ad minus unde, inventore nobis tempore repellat recusandae est, facere porro exercitationem quia totam adipisci sequi, hic excepturi eum optio officiis perspiciatis. Optio, expedita. Repudiandae excepturi facilis deleniti qui laudantium, sed tempora. Porro doloribus nesciunt atque numquam esse ea repudiandae necessitatibus saepe deserunt doloremque ut non quos aut mollitia aspernatur, laboriosam quidem dolorum fuga nostrum. Placeat quos reiciendis fugit veritatis, aut sapiente harum nostrum laudantium exercitationem eaque quo eligendi voluptatem animi eum cum. Harum est hic sapiente commodi eum veniam debitis deleniti earum, eos, fuga, similique aut fugiat incidunt deserunt repellat. Facere nostrum deserunt dignissimos. Quidem natus voluptatum quaerat, delectus culpa dolores sequi recusandae nesciunt, quasi repellat animi eligendi distinctio accusamus. Laboriosam laborum culpa dolor placeat, sed nam a nobis debitis alias atque enim illo aut. Nesciunt quia, illo quis ipsam velit voluptatem architecto asperiores debitis, qui vitae quo. A, dolorum suscipit? Deserunt sequi, numquam maiores vel nam hic libero necessitatibus dolorem, optio enim nostrum veritatis dicta, quisquam aut possimus at provident! Officiis et ipsa molestiae ex quam voluptas quibusdam iure, molestias libero voluptate recusandae accusamus ipsum labore, sit sequi officia similique dolorem tenetur magnam facilis eaque distinctio! Nisi ex vel eaque eos similique exercitationem iusto sunt doloribus ipsum hic soluta totam dolorum nobis, aperiam nemo perspiciatis est quia id nostrum. Rerum labore dolore nostrum tempora vel doloribus ea eius, nihil doloremque non corporis deserunt, ducimus nulla reprehenderit animi provident. Saepe iste ea nihil eum impedit minus perferendis et, minima commodi! Accusamus inventore molestiae facere aspernatur aut molestias eum dolore aliquam veniam exercitationem? Quis, similique voluptate laborum vel distinctio maxime ullam esse repudiandae labore sapiente autem vero libero quasi? Dignissimos eum qui, exercitationem vero tenetur assumenda id voluptas aliquid obcaecati sapiente eaque iusto saepe rem fugiat reprehenderit similique illum a, sint illo laboriosam expedita, eveniet vel? Adipisci, dolore delectus id repudiandae ipsum sapiente quidem nobis corporis ipsa eos neque veniam porro aspernatur sint iste laboriosam! Reiciendis eaque quia, eligendi culpa vero nostrum fugit ut. Obcaecati laudantium, ipsam nesciunt exercitationem ullam minus voluptatem ipsum nam iusto laborum similique, maiores fuga necessitatibus, commodi ratione quidem repellat. Soluta distinctio placeat doloribus exercitationem, nihil quae cumque expedita libero a iure.
                </p>
            </ProductContainer>
        </>
    )
}

export default ProductComponent