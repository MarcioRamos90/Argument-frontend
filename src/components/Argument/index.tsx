import React, { useState } from 'react';

import './index.css';
import NickName from '../Nickname';
import Comment from '../Comment';

import Selector from '../Selector'


function Argument() {
  const [user, setUser] = useState(1);

  return (
    <div className="root">
      <NickName />
      <section style={{ display: user === 1 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          ullamcorper sit amet velit sit amet cursus. Proin tempus dui nec
          libero posuere, id ultricies orci scelerisque. Sed quis velit ipsum.
          Pellentesque elementum feugiat turpis, mattis hendrerit dui
          pellentesque non. Morbi ut est quis justo facilisis mollis ac quis
          nulla. Proin quis leo eget elit scelerisque auctor nec eu libero. Cras
          ac nibh scelerisque, varius velit sit amet, pretium elit. Praesent
          varius dictum lacus, vel consectetur libero posuere efficitur. Nunc
          vel maximus tortor.
        </p>
        <p>
          Suspendisse ultrices ex tellus, a tincidunt neque laoreet at. Etiam
          non tempus diam. Nam at eleifend quam. Curabitur elementum, felis
          dignissim fringilla condimentum, tellus nisi laoreet lacus,
          ullamcorper imperdiet mi nisl quis nibh. Sed sit amet justo at urna
          vehicula volutpat nec vitae eros. Proin a condimentum sapien. Praesent
          pharetra non ex a pharetra. Sed mauris dui, iaculis id facilisis nec,
          fringilla sit amet sem. In quis lacinia est, id blandit augue. Nullam
          eleifend et neque et mattis. Cras sed aliquet ipsum. Etiam semper
          risus quis mi efficitur, at feugiat eros accumsan. Integer ac ex
          sagittis sem egestas consequat. Proin id malesuada tortor
        </p>

        <p>
          <mark>
            Mauris vel purus in elit ultricies blandit sed ut nulla. Vivamus eu
            nulla a turpis pharetra laoreet. Maecenas blandit eros nec metus
            finibus, non gravida leo pharetra. Maecenas dapibus condimentum
            metus eu ultrices. Aliquam sollicitudin rhoncus magna, at vestibulum
            justo rutrum id. Proin feugiat enim quis nunc fermentum sagittis.
            Vivamus finibus ex eget eros consequat, ac vulputate leo ultrices.
          </mark>
        </p>
        <p>
          Nulla justo mi, vehicula ac turpis ut, pharetra sagittis tellus. Donec
          id feugiat risus. Vivamus convallis mi magna, a vulputate tellus
          cursus eget. Mauris sed enim pulvinar, efficitur velit sit amet,
          egestas risus. In metus velit, vestibulum sit amet nibh et, maximus
          consequat metus. Fusce ac augue molestie, porttitor arcu nec, iaculis
          neque. Proin maximus ipsum eu dictum sagittis. Mauris vitae augue eget
          sapien imperdiet feugiat. Praesent sagittis facilisis urna, vel
          feugiat elit vestibulum a. Fusce sodales malesuada neque, et iaculis
          nibh rhoncus eu. Curabitur et lacus dapibus, dignissim enim viverra,
          aliquam augue.
        </p>
      </section>
      <section style={{ display: user === 2 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          ullamcorper sit amet velit sit amet cursus. Proin tempus dui nec
          libero posuere, id ultricies orci scelerisque. Sed quis velit ipsum.
          Pellentesque elementum feugiat turpis, mattis hendrerit dui
          pellentesque non. Morbi ut est quis justo facilisis mollis ac quis
          nulla. Proin quis leo eget elit scelerisque auctor nec eu libero. Cras
          ac nibh scelerisque, varius velit sit amet, pretium elit. Praesent
          varius dictum lacus, vel consectetur libero posuere efficitur. Nunc
          vel maximus tortor.
        </p>
        <p>
          Suspendisse ultrices ex tellus, a tincidunt neque laoreet at. Etiam
          non tempus diam. Nam at eleifend quam. Curabitur elementum, felis
          dignissim fringilla condimentum, tellus nisi laoreet lacus,
          ullamcorper imperdiet mi nisl quis nibh. Sed sit amet justo at urna
          vehicula volutpat nec vitae eros. Proin a condimentum sapien. Praesent
          pharetra non ex a pharetra. Sed mauris dui, iaculis id facilisis nec,
          fringilla sit amet sem. In quis lacinia est, id blandit augue. Nullam
          eleifend et neque et mattis. Cras sed aliquet ipsum. Etiam semper
          risus quis mi efficitur, at feugiat eros accumsan. Integer ac ex
          sagittis sem egestas consequat. Proin id malesuada tortor
        </p>
        <p>
          Mauris vel purus in elit ultricies blandit sed ut nulla. Vivamus eu
          nulla a turpis pharetra laoreet. Maecenas blandit eros nec metus
          finibus, non gravida leo pharetra. Maecenas dapibus condimentum metus
          eu ultrices. <mark>Aliquam sollicitudin rhoncus magna, at vestibulum justo
          rutrum id. Proin feugiat enim quis nunc fermentum sagittis. Vivamus
            finibus ex eget eros consequat, ac vulputate leo ultrices.
            </mark>
        </p>
        <Selector
          coords={[[0,300], [400, 510, 'blue']]}
          text="justo mi, vehicula ac turpis ut, pharetra sagittis tellus.
            Donec id feugiat risus. Vivamus convallis mi magna, a vulputate
            tellus cursus eget. Mauris sed enim pulvinar, efficitur velit sit
            amet, egestas risus. In metus velit, vestibulum sit amet nibh et,
            maximus consequat metus. Fusce ac augue molestie, porttitor arcu
            nec, iaculis neque. Proin maximus ipsum eu dictum sagittis. Mauris
            vitae augue eget sapien imperdiet feugiat. Praesent sagittis
            facilisis urna, vel feugiat elit vestibulum a. Fusce sodales
            malesuada neque, et iaculis nibh rhoncus eu. Curabitur et lacus
            dapibus, dignissim enim viverra, aliquam augue."/>
      </section>
      <hr/>
      <section>
        <div
          onClick={() => {
            setUser(1);
          }}
        >
          <Comment selected={user === 1} />
        </div>
        <div
          onClick={() => {
            setUser(2);
          }}
        >
          <Comment selected={user === 2}/>
        </div>
      </section>
    </div>
  );
}

export default Argument;
